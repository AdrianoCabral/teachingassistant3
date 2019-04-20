import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[];
   cpfduplicado; githubLoginDuplicado; cpfNaoCadastrado: boolean = false;

   criarAluno(a: Aluno): void {
     this.alunoService.criar(a)
        .then(ab => {
           if (ab) {
              console.log(ab);
              this.alunos.push(ab);
              this.aluno = new Aluno();
           } else {
              this.cpfduplicado = true;
              this.githubLoginDuplicado = true;
           }
        })
        .catch(erro => alert(erro));
   }
   removerAluno(a: Aluno): void {
      this.alunoService.remover(a)
      .then(ad =>{
         if (ad) {
            console.log(ad);
            var i = this.alunos.findIndex(c => c.cpf == ad.cpf);
            this.alunos.splice(i, 1);
         } else {
            this.cpfNaoCadastrado = true;
         }
      })
   }

   onMove(): void {
      this.cpfduplicado = false;
      this.githubLoginDuplicado = false;
      this.cpfNaoCadastrado = false;
   }

   ngOnInit(): void {
     this.alunoService.getAlunos()
         .then(as => this.alunos = as)
         .catch(erro => alert(erro));
   }

}