import { Aluno } from '../../gui/ta-gui/src/app/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf) && this.githubLoginNaoCadastrado(aluno.githubLogin)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }
remover(aluno: Aluno): Aluno{
    var index = this.alunos.findIndex(a => a.cpf == aluno.cpf);
    var result = this.alunos[index];
    if(result){
      this.alunos.splice(index, 1);
    }
    return result;
  }
  cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
  }

  githubLoginNaoCadastrado(githubLogin: string): boolean{
    return !this.alunos.find(a => a.githubLogin == githubLogin)
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}